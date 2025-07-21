body {
  font-family: Arial, sans-serif;
  background: #f2f6fc;
  margin: 0;
  padding: 0;
}

header {
  background: #014c78;
  color: white;
  padding: 20px;
  text-align: center;
}

footer {
  background: #e1e1e1;
  color: #333;
  text-align: center;
  padding: 10px;
  font-size: 14px;
}

.malla-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 15px;
  padding: 20px;
}

.semestre {
  background: white;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  transition: 0.3s;
}

.semestre:hover {
  transform: scale(1.02);
  border-color: #014c78;
}

.semestre h2 {
  text-align: center;
  color: #014c78;
  margin-bottom: 10px;
}

.asignatura {
  background: #dde9f6;
  margin: 5px 0;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
}

.asignatura:hover {
  background: #bcd6f1;
}
