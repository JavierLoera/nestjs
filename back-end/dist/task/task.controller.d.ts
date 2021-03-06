import { TaskService } from './task,service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(userid: number): Promise<any>;
    getTaskByid(idTask: number): Promise<import("../entity/task.entity").Task>;
    changeTaskState(idTask: number): Promise<void>;
    AddTask(body: CreateTaskDto): Promise<import("../entity/task.entity").Task>;
    deleteTask(idTask: number, userId: number): Promise<number>;
    UpdateTask(idTask: number, userId: number, body: UpdateTaskDto): Promise<[affectedCount: number]>;
}
