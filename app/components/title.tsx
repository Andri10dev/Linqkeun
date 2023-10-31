const Title = (prop:any) => {
    return (
        <p className={`text-center font-bold text-2xl text-${prop.color}`}>
            {prop.name}
        </p>
    )
}

export default Title