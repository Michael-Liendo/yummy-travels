export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-2xl m-auto pt-1 bg-[#fafafa]">
      <div className="flex justify-center mt-10 mb-10">
        <img className="w-[200px]" src="/yummy-travel.png" />
      </div>
      <div>{children}</div>
    </main>
  );
};
