"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type EditModeContextValue = {
  isEditing: boolean;
  toggleEditing: () => void;
  getValue: (key: string, fallback: string) => string;
  setValue: (key: string, value: string) => void;
};

const EditModeContext = createContext<EditModeContextValue | undefined>(undefined);

const LOCAL_STORAGE_FLAG_KEY = "__edit_mode_enabled__";
const LOCAL_STORAGE_DATA_KEY = "__editable_content__";

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [store, setStore] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const flag = window.localStorage.getItem(LOCAL_STORAGE_FLAG_KEY);
      setIsEditing(flag === "true");
      const persisted = window.localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
      if (persisted) {
        const parsed = JSON.parse(persisted) as Record<string, string>;
        if (parsed && typeof parsed === "object") setStore(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(LOCAL_STORAGE_FLAG_KEY, String(isEditing));
    } catch {
      // ignore
    }
  }, [isEditing]);

  const persistStore = useCallback((next: Record<string, string>) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const getValue = useCallback(
    (key: string, fallback: string) => {
      if (!key) return fallback;
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : fallback;
    },
    [store]
  );

  const setValue = useCallback((key: string, value: string) => {
    setStore((prev) => {
      const next = { ...prev, [key]: value };
      persistStore(next);
      return next;
    });
  }, [persistStore]);

  const toggleEditing = useCallback(() => setIsEditing((v) => !v), []);

  const value = useMemo<EditModeContextValue>(() => ({ isEditing, toggleEditing, getValue, setValue }), [getValue, isEditing, setValue]);

  return <EditModeContext.Provider value={value}>{children}</EditModeContext.Provider>;
}

export function useEditMode() {
  const ctx = useContext(EditModeContext);
  if (!ctx) throw new Error("useEditMode must be used within EditModeProvider");
  return ctx;
}

export function EditableText({ id, as: Tag = "span", className, placeholder, children }: {
  id: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  placeholder?: string;
  children: string;
}) {
  const { isEditing, getValue, setValue } = useEditMode();
  const initial = getValue(id, children ?? "");

  if (isEditing) {
    if (Tag === "h1" || Tag === "h2" || Tag === "h3" || Tag === "h4" || Tag === "h5" || Tag === "h6") {
      const Heading = Tag as any;
      return (
        <Heading
          className={className}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setValue(id, e.currentTarget.textContent || "")}
          data-editable-id={id}
        >
          {initial || placeholder}
        </Heading>
      );
    }
    if (Tag === "p") {
      return (
        <p
          className={className}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setValue(id, e.currentTarget.textContent || "")}
          data-editable-id={id}
        >
          {initial || placeholder}
        </p>
      );
    }
    return (
      <span
        className={className}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => setValue(id, e.currentTarget.textContent || "")}
        data-editable-id={id}
      >
        {initial || placeholder}
      </span>
    );
  }

  const Comp: any = Tag;
  return <Comp className={className}>{initial || placeholder}</Comp>;
}

export function EditModeToggle() {
  const { isEditing, toggleEditing } = useEditMode();
  return (
    <button
      type="button"
      onClick={toggleEditing}
      className="fixed bottom-4 right-4 z-[100] rounded-full bg-amber-600 px-4 py-2 text-white shadow-lg hover:bg-amber-700 focus:outline-none"
      aria-pressed={isEditing}
      title={isEditing ? "Exit Edit Mode" : "Enter Edit Mode"}
    >
      {isEditing ? "Save & Exit" : "Edit Mode"}
    </button>
  );
}



