function RepositoryStats({report}){
    return(
        <div className="mt-16 bg-white rounded-xl shadow-md p-6">

            <h3 className="text-2xl font-bold mb-6">
                📊 Repository Statistics
            </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div >
                        ⭐ Stars
                        <p className="font-bold">
                           {report.stars.toLocaleString()}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">
                            🍴 Forks
                            {report.forks.toLocaleString()}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">
                            🐞 Open Issues
                            {report.openIssues.toLocaleString()}
                        </p>
                    </div>
                    <div>
                        🌿 Default Branch
                        <p className="font-bold">
                            {report.defaultBranch}
                        </p>
                    </div>
                </div>
        </div>
    );
}
export default RepositoryStats;