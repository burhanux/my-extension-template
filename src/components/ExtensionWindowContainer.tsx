import React from "react";

export default function ExtensionWindowContainer({ children }: { children: React.JSX.Element | React.JSX.Element[] | null }) {
    return (
        <div className="w-[800px] h-[600px] border-[1px] border-red-600">
            {children}
        </div>)
}