export default function FormWrapper({ children }) {
  return (
    <main className="max-w-[30rem] mx-auto bg-white md:max-w-[63.125rem]">
      <form className="grid md:grid-cols-2">{children}</form>
    </main>
  );
}
