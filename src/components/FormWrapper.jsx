export default function FormWrapper({ children }) {
  return (
    <main className="max-w-[30rem] mx-auto  md:max-w-[63.125rem]">
      <form className="grid md:grid-cols-2 md:rounded-2xl bg-white">{children}</form>
    </main>
  );
}
