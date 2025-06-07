import './sample8.box.css';

type BaseProps = {
    id: string;
    visible: boolean;
};

type ChildrenProps = {
    children: React.ReactNode;
};

type StyleProps = {
    className?: string;
    style?: React.CSSProperties;
};

type ComponentProps = BaseProps & ChildrenProps & StyleProps;

export const Box: React.FC<ComponentProps> = ({
    id,
    visible,
    className,
    style,
    children,
}) => {
    if (!visible) return null;

    return (
        <div id={id} className={className} style={style}>
            {children}
        </div>
    );
};
