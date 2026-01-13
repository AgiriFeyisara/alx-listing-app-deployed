interface PillProps {
  label: string;
}

const Pill = ({ label }: PillProps) => {
  return (
    <button className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-black hover:text-white transition">
      {label}
    </button>
  );
};

export default Pill;
