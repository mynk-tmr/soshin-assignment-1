const DataCard = ({ title, footer, className, data }) => {
  return (
    <article className={`rounded-[10px] p-3 *:m-4 text-navy ${className}`}>
      <header className={`font-[500] capitalize`}>{title}</header>
      <data className="text-4xl">{data}</data>
      <footer className="font-roboto">{footer}</footer>
    </article>
  );
};

export default DataCard;
