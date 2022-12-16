import Card from "./card";

function Dashboard(){
    const products=[{
        title:"EARINGS (MONTLY)",
        price:  "$40,000",
        theme:"primary"
      },
      {
        title:"EARNINGS (ANNUAL)",
        price:  "$215,000",
        theme:"success"
      },
      {
        title:"TASKS",
        price:  "50%",
        theme:"info"
      },
      {
        title:"PENDING REQUESTS",
        price:  "18",
        theme:"warning"
      },]
    return(
        <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
    <div className="row">
    {
        products.map((item)=>{
return <Card item={item}></Card>
        })
    }
    
    </div>
    </div>
    )
}
export default Dashboard;