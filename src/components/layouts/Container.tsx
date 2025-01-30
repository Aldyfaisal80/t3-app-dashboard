type PageContainerProps = {
    children: React.ReactNode,
    className?: string
}

export const Container: React.FC<PageContainerProps> = ({
    children,
    className
}) => {
    return <main className={`container ${className}`}>{children}</main>
};