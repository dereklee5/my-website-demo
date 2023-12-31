export function FilledButton({ children }) {
    return (
      <DefaultButton style="bg-secondary-900 border-secondary-900 text-secondary-100 md:hover:bg-secondary-200 md:hover:text-secondary-900">
        {children}
      </DefaultButton>
    );
  }
  
  export function OutlinedButton({ children }) {
    return (
      <DefaultButton style="bg-transparent border-primary-200 text-primary-200 md:hover:border-primary-400 md:hover:text-primary-400">
        {children}
      </DefaultButton>
    );
  }
  
  function DefaultButton({ children, style }) {
    return (
      <button
        className={`inline font-medium border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors ${style}`}
      >
        {children}
      </button>
    );
  }