import Hero from "../components/Hero";
import Features from "../components/features";
import WhyChoose from "../components/WhyChoose";
import RepositoryInput from "../components/RepositoryInput";
function Home(){
    return(
        <>
        <Hero/>
        <RepositoryInput/>
        <Features/>
        <WhyChoose/>
        </>
    );
}
export default Home;