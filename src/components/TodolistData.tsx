import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import supabase from "../utils/superbase";
const todolistData = ({tasks}) => {

    const [listData, setListData] = useState(tasks);
    const [subtaskInputs, setSubtaskInputs] = useState({});

    useEffect(() => {
        setListData(tasks);

        // Initialize subtask inputs state
        const subtaskInputs = {};
        tasks.forEach(task => {
            if (task.sub_task) {
                task.sub_task.forEach(subtask => {
                    subtaskInputs[subtask.id] = subtask.subTask;
                });
            }
        });
        setSubtaskInputs(subtaskInputs);
    }, [tasks]);
    const changeHandleData = (e, subtaskId) => {
        const { value } = e.target;
        setSubtaskInputs(prevInputs => ({
            ...prevInputs,
            [subtaskId]: value
        }));
    };

    return (
        <>
            <div className="flex gap-3">
                {listData.map((value,index) => (
                    <div key={index} className="card p-10 w-[30%] border text-center relative">
                        <div className="deleteicon absolute left-3 top-3">{index+1}.</div>
                        <div className="deleteicon absolute right-3 top-3">Delete</div>
                        <Dialog>
                            <DialogTrigger>{new Date(value.created_at).toLocaleDateString()}</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle className="mb-5">Today's Task</DialogTitle>
                                <DialogDescription>
                                    {value.sub_task != null && value.sub_task.map((subtask, subtaskIndex) => (
                                        <div key={subtaskIndex} className="flex items-center gap-2 mb-3">
                                            <Checkbox />
                                            <Input
                                                    type="text"
                                                    onChange={(e) => changeHandleData(e, subtask.id)}
                                                    name={`task-${subtask.id}`}
                                                    value={subtaskInputs[subtask.id] || ''}
                                                />
                                        </div>
                                    )) }
                                </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <Button variant="outline" className="ml-auto">Add New Task</Button>
                                    <Button variant="outline" className="">Done</Button>
                                </DialogFooter>
                            </DialogContent>

                        </Dialog>
                    </div>
                ))}
                
            </div>
        </>
    );
};
  
export default todolistData;