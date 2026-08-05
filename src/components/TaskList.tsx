import Button from "./Button";

function TaskList() {
  return (
    <div>

      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Enter a task..."
          className="border rounded-lg p-2 flex-1"
        />

        <Button
          label="Add"
          color="bg-green-500"
        />
      </div>

      <div className="space-y-3">

        <div className="flex justify-between items-center border rounded-lg p-3">
          <span>Learn React</span>

          <Button
            label="Delete"
            color="bg-red-500"
          />
        </div>

        <div className="flex justify-between items-center border rounded-lg p-3">
          <span>Study TypeScript</span>

          <Button
            label="Delete"
            color="bg-red-500"
          />
        </div>

        <div className="flex justify-between items-center border rounded-lg p-3">
          <span>Build Task Manager</span>

          <Button
            label="Delete"
            color="bg-orange-500"
          />
        </div>

      </div>

    </div>
  );
}

export default TaskList;