import Button from "../components/ButtonComponent";
import { useApp } from "../context/AppContext";

export default function FormLayout() {
  const { setName, name, setStudents, inputRef } = useApp();

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") return;

    const addStudent = {
      id: crypto.randomUUID(),
      name: name,
      date: new Date().toLocaleDateString(),
    };

    setStudents((prev) => [...prev, addStudent]);
    setName("");
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="p-3 flex flex-col w-full gap-3">
        <label htmlFor="name" className="text-2xl font-bold">
          Student Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name.."
          className="p-4 outline-lime-950 border rounded focus:border-0"
        />
      </div>

      <div className="flex gap-4 p-3">
        <Button
          type="submit"
          className="flex-1 px-6 py-3 bg-lime-950 text-white rounded font-semibold hover:bg-lime-900 transition-colors"
        >
          Add Student
        </Button>
      </div>
    </form>
  );
}
