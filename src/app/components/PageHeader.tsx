interface PropsPageHeader {
  title: string;
  description: string;
}
const PageHeader = ({ title, description }: PropsPageHeader) => (
  <>
    <p className="text-title text-standard font-semibold">{description}</p>
    <h3 className="text-text font-bold text-bigTitle border-b-4 border-b-green ">{title}</h3>
  </>
);

export default PageHeader;
