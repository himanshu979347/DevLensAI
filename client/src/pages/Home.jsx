import Hero from "../components/landing/Hero";
import Features from "../components/landing/features";
import WhyChoose from "../components/landing/WhyChoose";
import RepositoryInput from "../components/Analysis/RepositoryInput";
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