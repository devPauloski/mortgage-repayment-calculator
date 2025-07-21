export default function FormWrapper({ children }) {
  return (
    <main className="mx-auto max-w-[30rem] md:max-w-[63.125rem]">
      <form className="grid bg-white md:grid-cols-2 md:rounded-2xl">
        {children}
      </form>
    </main>
  );
}
