interface InputProps {
  label?: string
  error?: string
  className?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  id?: string
}

export function Input({
  label,
  error,
  className = '',
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm text-gray-400">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className={`bg-gray-800 border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
