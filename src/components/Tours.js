import Card from './Card';

function Tours({tours, removetour})
{
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) =>  {
                        return <Card {...tour} removetour={removetour}></Card>
                    } )
                }
            </div>
        </div>
    );
};

export default Tours;