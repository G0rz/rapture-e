interface Props {
    title: string;
    subtitle?: string;
    className?: string;
}

export const Title = ({title, subtitle, className}: Props) => {
    return (
        <div className={`${className}`}>
            <h1 className={"text-5xl font-bold mt-8"}>
                {title}
            </h1>
            <h2 className="text-3xl mt-4">{subtitle}</h2>
        </div>
    );
};
