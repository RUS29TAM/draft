import { memo } from "react";

const Todos = (props: { todos: any; index: any }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {props.todos.map((todo: any, index: any) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

export default memo(Todos);