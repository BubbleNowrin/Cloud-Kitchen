
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';

const Details = () => {

    const foodDetails = useLoaderData();


    return (
        <div className='my-8'>

            {
                foodDetails.map(food => <ServiceDetails key={food._id} food={food}></ServiceDetails>)
            }
            {
                <div class="mx-auto max-w-xl text-center mt-20">
                    <h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-lime-500">
                        Trusted Reviews from Our Customers
                    </h2>

                    <p class="text-lime-700 mx-auto mt-4 max-w-lg">
                        Our customers are our secret ingredients to good food.
                    </p>
                </div>
            }

        </div>

    );
};

export default Details;