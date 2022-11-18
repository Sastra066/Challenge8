import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../action/CarsAction";
import Search from "../Search";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dateTime(hasil) {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    hasil = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    );

    return hasil
}

function ListCars() {
  const [tipeDriver, setTipeDriver] = useState();
  const [date, setDate] = useState();
  const [jlhPenumpang, setJlhPenumpang] = useState("0");
  const { getListCarsResult, getListCarsLoading, getListCarsError } =
    useSelector((state) => state.CarsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getListCars
    console.log("1. use effect component did mount");
    dispatch(getListCars());
  }, [dispatch]);

  function onFiltervalue(...data) {
    const d = data[1]+"T"+data[2];
    const formDate = Date.parse(d);
    setTipeDriver(data[0] === 1 ? true : false);
    setDate(formDate);
    console.log(formDate);
    setJlhPenumpang(data[3]);
  }

  return (
    <div className="container">
      <Search filterValue={onFiltervalue}/>
      <div id="cars-container">
        {getListCarsResult ? (
          getListCarsResult.filter((car) => car.capacity >= jlhPenumpang && car.available === tipeDriver && Date.parse((dateTime(car.availableAt))) > date
          ).map( filterCar => {
            console.log(Date.parse((dateTime(filterCar.availableAt))));
            return (
              <div className="card" style={{ width: "18rem" }} key={filterCar.id}>
                <img src={filterCar.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <p>
                    {filterCar.manufacture}/{filterCar.type}
                  </p>
                  <p className="bold">Rp {filterCar.rentPerDay}/hari</p>
                  <p>{filterCar.description}</p>
                  <p>
                    <img src="./images/fi_users.png" alt="" />
                    {filterCar.capacity} orang
                  </p>
                  <p>
                    <img src="./images/fi_settings.png" alt="" />
                    {filterCar.transmission}
                  </p>
                  <p>
                    <img src="./images/fi_calendar.png" alt="" />
                    Tahun {filterCar.year}
                  </p>
                </div>
                <button className="pilihMobil">Pilih Mobil</button>
              </div>
            );
          })
        ) : getListCarsLoading ? (
          <h1>Loading</h1>
        ) : (
          <h1>{getListCarsError ? getListCarsError : "Data Kosong"}</h1>
        )}
      </div>
    </div>
  );
}

export default ListCars;
