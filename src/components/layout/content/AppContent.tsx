import React from 'react'

interface IProps {
    children?: React.ReactNode
}

const AppContent: React.FC<IProps> = ({
    children
}) => {
    return (
        <section className='ps-64 pt-16'>
            <div className='w-full p-6'>
                {children}
            </div>
        </section>
    )
}

export default AppContent