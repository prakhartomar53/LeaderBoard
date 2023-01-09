import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";



function Leaderboard() {
    const [ranklist, setRanklist] = useState([]);
    const [search, setSearch] = useState([]);
    const participantsCollectionRef = collection(db, "leaderboard");
    //for getting ranklist
    useEffect(() => {
        const getRanklist = async () => {
            const data = await getDocs(participantsCollectionRef);
            setRanklist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getRanklist();
    }, []);

    var sortedData= ranklist.sort(function (x, y) {
        let a = x.Points,
            b = y.Points;
        return b-a;
    });
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Leaderboard</h1>
                    <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>
                    <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <input type="text" placeholder='Search' id="hero-field" name="hero-field" onChange={e => setSearch(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded-full focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="container my-4 px-12 lg:px-8 sm:px-2">
                        <div className="shadow-[0_0_2px_rgba(50,69,107,0.4)] rounded-lg overflow-hidden">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-center text-base font-semibold text-darkwhite uppercase tracking-wider lg:text-sm">
                                            Rank
                                        </th>
                                        <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-center text-base font-semibold text-darkwhite uppercase tracking-wider lg:text-sm">
                                            Participant&apos;s Info
                                        </th>

                                        <th className="px-4 py-5 border-b-2 border-gray-200 bg-lightblack text-center text-base font-semibold text-darkwhite uppercase tracking-wider lg:text-sm xs:hidden">
                                            Points
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {sortedData.map((data) => (<>
                                        <UserCard key={data.Email} data={data} /></>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Leaderboard