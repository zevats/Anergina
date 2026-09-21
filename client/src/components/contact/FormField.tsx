import React from 'react';

export interface FormOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options?: FormOption[];
  rows?: number;
  disabled?: boolean;
  autoComplete?: string;
}

export function FormField({
  id,
  label,
  type = 'text',
  required = false,
  placeholder,
  value,
  onChange,
  error,
  options = [],
  rows = 4,
  disabled = false,
  autoComplete,
}: FormFieldProps) {
  const computedAutoComplete =
    autoComplete ||
    (id === 'name'
      ? 'name'
      : id === 'company'
      ? 'organization'
      : id === 'email'
      ? 'email'
      : id === 'phone'
      ? 'tel'
      : undefined);

  const baseInputStyles =
    'w-full bg-[#0A0D11] border rounded-[6px] px-4 py-3 text-sm text-[#F5F7FA] placeholder-[#8E99A5]/40 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#32D8FF] focus:border-[#32D8FF] disabled:opacity-50 disabled:cursor-not-allowed';
  const borderStyles = error ? 'border-red-500/80 focus:border-red-500' : 'border-[#1D242B]';

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wider text-[#8E99A5] flex items-center justify-between"
      >
        <span>
          {label} {required && <span className="text-[#32D8FF]">*</span>}
        </span>
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          autoComplete={computedAutoComplete || 'off'}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${baseInputStyles} ${borderStyles} resize-none`}
        />
      ) : type === 'select' ? (
        <div className="relative">
          <select
            id={id}
            name={id}
            autoComplete={computedAutoComplete || 'off'}
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`${baseInputStyles} ${borderStyles} appearance-none pr-10`}
          >
            <option value="" disabled className="bg-[#0A0D11] text-[#8E99A5]">
              {placeholder || 'Select an option'}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#0A0D11] text-[#F5F7FA]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8E99A5]">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={computedAutoComplete}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${baseInputStyles} ${borderStyles}`}
        />
      )}

      {error && (
        <span id={`${id}-error`} className="text-xs text-red-400 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
}
