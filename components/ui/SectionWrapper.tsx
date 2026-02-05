import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className, ...props }: SectionWrapperProps) => {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;
