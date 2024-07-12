function ExpendablePanel({ header, children }) {
    return (
        <div className='mb-2 border rounded'>
            <div className='flex p-2 justify-between items-center cursor-pointer'>
                <div className='flex flex-row items-center justify-between'>
                    {header}
                </div>
            </div>
            <div className='p-2 boeder-t'>
                {children}
            </div>
        </div>
    );
}

export default ExpendablePanel;