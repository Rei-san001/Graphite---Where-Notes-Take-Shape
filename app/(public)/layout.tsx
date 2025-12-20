const PublicLayout = ({ 
    children
}: { 
    children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen dark:bg-[#1F1F1F]"> {/* Changed h-full to min-h-screen */}
      {children}
    </div>
  );
};
export default PublicLayout;