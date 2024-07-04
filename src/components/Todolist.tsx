import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import TodolistData from "../components/TodolistData"
import supabase from "../utils/superbase";
const todolist = () => {
    const [tasks,setTasks]= useState([]);
    const fetchTasks = async () => {
        try{
            const { data, error } = await supabase
            .from('to_do_list')
            .select('*');
            setTasks(data);
        } catch(error){
            console.error('error',error.message);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async () =>{
        try{
            const { data, error } = await supabase
            .from('to_do_list')
            .insert([
                { task_name: 'test1' },
            ])
            .select()
            if (error) {
                console.error('Error adding task:', error);
            } else {
                setTasks([...tasks, ...data]);
            }

        } catch{
            console.error('error');
        }
        
    };
    return (
        <>
            <div className="buttonWrapper flex gap-2 w-full">
                <Button variant="outline" className="ml-auto">Refresh</Button>
                <Button onClick={addTask}>Add Task</Button>
            </div>
            <TodolistData tasks={tasks}/>
        </>
    );
};
  
export default todolist;