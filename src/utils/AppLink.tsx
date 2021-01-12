import * as React from "react";

export type AppLinkProps = {
    to: string;
    message?: string;
    children?: React.ReactNode;
} & React.AnchorHTMLAttributes<any>;

// tslint:disable-next-line:variable-name
const AppLink: React.SFC<AppLinkProps> = (props: AppLinkProps) => {
    const { to, message, children, ...rest } = props;
    return (
        <a
            {...rest}
            href={to}
            onClick={(e) => {
                e.preventDefault();
                if (message && window.confirm(message) === false) {
                    return false;
                }

                window.history.pushState(
                    {
                        forceRender: true
                    },
                    "",
                    to
                );
            }}
        >
            {children}
        </a>
    );
};

export default AppLink;
