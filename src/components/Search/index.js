import React from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function Search(props) {
  const [formValue, setFormValue] = useState({
    tipeDriver: "",
    waktu: "",
    jlhPenumpang: "",
  });
  const [tanggal, setTanggal] = useState("");

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleChangeDate = (newValue) => {
    console.log(newValue);
    const value = newValue.$d.toLocaleString("sv-SE");
    const value2 = value.split(" ");
    const date = value2[0];
    console.log(date);
    setTanggal(date);
  };
  /* const [tipeDriver, setTipeDriver] = useState();
  const [tanggal, setTanggal] = useState();
  const [waktu, setWaktu] = useState();
  const [jlhPenumpang, setJlhPenumpang] = useState(); */
  const { tipeDriver, waktu, jlhPenumpang } = formValue;
  /* const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(name);
    setTipeDriver(value);
  }; */

  function handleSubmit(e) {
    e.preventDefault();
    props.filterValue(tipeDriver, tanggal, waktu, jlhPenumpang);
    /* console.log(tipeDriver);
    console.log(tanggal);
    console.log(waktu);
    console.log(jlhPenumpang); */
  }

  return (
    <div>
      <section className="Cari-Mobil container">
        <form className="form" id="form" onSubmit={handleSubmit}>
          <div className="inp-wrapper">
            <div className="bagianSatu">
              <div className="tipe-driver">
                <label>Tipe Driver</label>
                <div className="">
                  <Select
                    value={tipeDriver}
                    onChange={handleChange}
                    className="select"
                    name="tipeDriver"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="" hidden>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Dengan Supir</MenuItem>
                    <MenuItem value={0}>Tanpa Supir</MenuItem>
                  </Select>
                </div>
              </div>
              <div>
                <label>Tanggal</label>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="date"
                >
                  <DesktopDatePicker
                    inputFormat="DD/MM/YYYY"
                    value={tanggal}
                    name="tanggal"
                    onChange={handleChangeDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>

            <div>
              <label>Waktu</label>
              <div className="time">
                <input
                  type="time"
                  id="time"
                  className="input"
                  onChange={handleChange}
                  value={waktu}
                  name="waktu"
                />
              </div>
            </div>
            <div>
              <label>Jumlah Penumpang (Optional)</label>
              <div className="jlhPenumpang">
                <input
                  type="number"
                  name="jlhPenumpang"
                  className="jlhPenumpang input"
                  placeholder="Jumlah penumpang"
                  id="jlhPenumpang"
                  value={jlhPenumpang}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button
                className="cariMobil"
                id="load-btn"
                name="submit"
                value="submit"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Search;
