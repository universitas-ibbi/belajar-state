import { useState } from "react";

export default function App() {
  const [daftar, setDaftar] = useState([]);
  const [beli, setBeli] = useState([]);
  const [item, setItem] = useState("");

  function bacaInputItem(event) {
    setItem(event.target.value);
  }

  function tambahDaftar() {
    if (item) {
      setDaftar([...daftar, item]);
      setItem("");
    }
  }

  function hapusItem(index) {
    setDaftar(daftar.filter((item, i) => i !== index));
  }

  function beliItem(index) {
    setBeli([...beli, daftar[index]]);
    setDaftar(daftar.filter((item, i) => i !== index));
  }

  function batalBeli(index) {
    setDaftar([...daftar, beli[index]]);
    setBeli(beli.filter((item, i) => i !== index));
  }

  return (
    <div className="container pt-3">
      <div className="input-group mt-3">
        <input
          type="text"
          value={item}
          onChange={bacaInputItem}
          className="form-control"
        />
        <button onClick={tambahDaftar} className="btn btn-success">
          Tambah
        </button>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <h5>Daftar Belanjaan ({daftar.length} items)</h5>
          <ul className="list-group">
            {daftar.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{item}</span>
                <div className="btn-group">
                  <button
                    className="btn btn-success"
                    onClick={() => beliItem(index)}
                  >
                    Sudah dibeli
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => hapusItem(index)}
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h5>Daftar sudah dibeli ({beli.length} items)</h5>
          <ul className="list-group">
            {beli.map((item, index) => (
              <li className="list-group-item" key={index}>
                <div className="d-flex justify-content-between align-items center">
                  <span>{item}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => batalBeli(index)}
                  >
                    Batal
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
