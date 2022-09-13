function Container({ children }) {
    return (
        <div style={{minHeight: "100vh"}} className="flex w-full md:w-2/3 mx-auto pt-14 pb-4">
            {children}
        </div>
    );
}

export default Container;