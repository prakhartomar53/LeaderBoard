import React, { useState } from 'react'
import Navbar from './Navbar'
import filelogo from './file.png'
import Papa from "papaparse"

function AdminPortal() {
    const [file1, setfile1] = useState("block");
    const [fileupload, setfileupload] = useState({
        style: "none",
        path: ""
    })
    var commonConfig = { delimiter: "," };
    const [CSVData, setCSVData] = useState("");

    function parsetoCSV(e) {
        // console.log(e);
        Papa.parse(e.target.files[0], {
            ...commonConfig,
            header: true,
            download: true,
            complete: (result) => {
                setCSVData(result.data);
            },
        });
    }

    function removeInput(e) {
        var path = e.target.value
        parsetoCSV(e)

        setfileupload({
            style: "block",
            path: path.substr(12)
        })
        setfile1("none")
    }


    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center justify-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Upload New Rankings</h1>
                        <p className="mb-8 leading-relaxed">Ranking Should be in CSV. Click here to download the template</p>
                        <div>
                            <button className="ml-8 inline-flex gap-2 text-center items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                Upload File
                                <input hidden accept=".csv" multiple type="file" required onChange={e => removeInput(e)} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminPortal