import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [toDo, setToDo] = useState([]);
	const [userValue, setUserValue] = useState("");

	function addToDo(task) {
		if (task.trim() === "") return;
		const newToDo = { label: task, done: false };
		setToDo([...toDo, newToDo]);
		setUserValue("")
	}

	function deleteToDo(removeIndex) {
		const newToDoList = toDo.filter((_, index) => index !== removeIndex);
		setToDo(newToDoList);
	}

	function handleEnter(e, task) {
		if (e.key === "Enter") {
			addToDo(task);
		}
	}
	return (
		<div className="container">
			<div className="top">
				<h1>Morning To-Dos</h1>
				<input
					type="text"
					value={userValue}
					onChange={(e) => setUserValue(e.target.value)}
					onKeyDown={(e) => handleEnter(e, userValue)} />
				<button id="addButton"
					className="btn btn-success"
					onClick={() => addToDo(userValue)}>Add</button>
			</div>
			<div>
				<p className="position-absolute">{toDo.map((task,index)=>(
					<div key={index}>
						<li>
							{task.label}
							<button id="deleteBtn" 
							className="btn btn-danger" 
							onClick={()=> deleteToDo(index)}>Delete</button>
						</li>
					</div>
				))}</p>
			</div>
		</div>
	);
};

export default Home;
