import { IconCoffee } from '@tabler/icons-react';
import React, { useEffect, useState } from "react";


const Contributors: React.FC<{ image: string; name: string; gitUser: string }> = ({ image, name, gitUser }) => {
    const blacklistedNames = ["DaniGP17", "zKXDEX"]
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/repos/IceClusters/icmysql/contributors?anon=1")
            .then((response) => response.json())
            .then((data) => {
                setContributors(function(){
                    let retval = [];
                    for(let i = 0; i < data.length; i++){
                        if(blacklistedNames.includes(data[i].login)) continue;
                        console.log(data[i].login)
                        retval.push({
                            name: data[i].login,
                            avatar: data[i].avatar_url,
                            commits: data[i].contributions
                        })
                    }
                    return retval;
                });
            })
            .catch((error) => console.log("Error: ", error));
    }, []);
    
    return (
    <div className="container__contributor">
        {contributors.map((contributor, i) => (
            <div className="card--c">
                <img className='avatar' src={contributor.avatar}/>
                <div className="space__info">
                    <a href={`https://github.com/${contributor.name}`} className='title__c'>{contributor.name}</a>
                    <h5 className='desc__c'>{contributor.commits} commits</h5>
                </div>
            </div>
        ))}
        
    </div>
  );
};

export default Contributors;
