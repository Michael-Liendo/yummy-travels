export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="max-w-2xl m-auto mt-1">
    <div className="flex justify-center">

      <img src="/yummy.jpeg" width={200} />
    </div>
    <div>

      {children}
    </div>
  </main>;
};
