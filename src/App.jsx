import './App.css'

import { useRef, useState, useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

import ServiceAnimal from './components/ServiceAnimal'
import FilterBar from './components/FilterBar'
import Filters from './components/Filters'
import MobileSearch from './components/MobileSearch'

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isServiceAnimalClicked, setIsServiceAnimalClicked] = useState(false);
  const animalRef = useRef(null);

  const [isFiltersClicked, setIsFiltersClicked] = useState(false);
  const filtersRef = useRef(null);

  const [placeFilter, setPlaceFilter] = useState("Efsaneler");

  const [searchedDestination, setSearchedDestination] = useState("");

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const [initialLoading, setInitialLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);

  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  const [isFooterInfoClicked, setIsFooterInfoClicked] = useState(false);
  const footerInfoRef = useRef(null);

  const [isMobileSearchClicked, setIsMobileSearchClicked] = useState(false);

  const textRef = useRef(null);
  const mobileTextRef = useRef(null);
  const [ClickedDiv, setClickedDiv] = useState(null);
  const [searchDestination, setSearchDestination] = useState("");
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("");
  const [guestInfo, setGuestInfo] = useState("")

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const total = adults + children;

  const [searchFilter, setSearchFilter] = useState("accommodation");

  const [isFilterBarShow, setIsFilterBarShow] = useState(true);

  const [isTotalPriceClicked, setIsTotalPriceClicked] = useState(false);

  const ClickDestinationDivHandler = () => {
    setClickedDiv("destination");
    textRef.current.focus();
  }

  const ClickMobileDestinationDivHandler = (event) => {
    event.stopPropagation();
    setClickedDiv("destination");
    mobileTextRef.current.focus();
  }
  const DeleteDestinationHandler = () => {
    setSearchDestination("");
  }
  const DestinationSearchHandler = (event) => {
    setSearchDestination(event.target.value)
  }
  const ClickCheckInDivHandler = (event) => {
    event.stopPropagation();
    setClickedDiv("checkin");
  }
  const ClickCheckOutDivHandler = (event) => {
    event.stopPropagation();
    setClickedDiv("checkout");
  }
  const ClickDateDivHandler = (event) => {
    event.stopPropagation();
    setClickedDiv("date");
  }
  const ClickGuestDivHandler = (event) => {
    event.stopPropagation();
    setClickedDiv("guest");
  }
  const DeleteDateHandler = (type) => {
    if (type === "checkin") {
      setCheckInDate("");
    } else if (type === "checkout") {
      setCheckOutDate("")
    } else if (type === "date") {
      setDate("");
    }
  }
  const DeleteGuestHandler = () => {
    setAdults(0);
    setChildren(0);
    setInfants(0);
    setPets(0);
    setGuestInfo("Misafir ekleyin");
  }

  const searchFilterHandler = () => {
    if (searchFilter === "accommodation") {
      setSearchFilter("experiences");
      setIsFilterBarShow(false);
      setSearchDestination("");
      setCheckInDate("");
      setCheckOutDate("");
      setDate("");
      DeleteGuestHandler();

    } else {
      setSearchFilter("accommodation");
      setIsFilterBarShow(true);
      setSearchDestination("");
      setCheckInDate("");
      setCheckOutDate("");
      setDate("");
      DeleteGuestHandler();
    }
  }

  const ClickResortSearchHandler = () => {
    if ( searchDestination && destination && ((checkInDate && checkOutDate) || date) && guestInfo) {
      setSearchedDestination(destination);
      setPlaceFilter("");
      if (!initialLoading) {
        setDataLoading(true);
        const timer = setTimeout(() => setDataLoading(false), 500);
        return () => clearTimeout(timer);
      }
    }
  }
  console.log(destination);
  console.log(searchDestination);
  const ScrollPositionHandler = () => {
    setScrollPosition(window.scrollY)
  }

  const ServiceAnimalHandler = (event) => {
    event.stopPropagation();
    setIsServiceAnimalClicked(true);
    console.log(isServiceAnimalClicked);
    document.body.style.overflow = 'hidden';
  }
  const ServiceAnimalCloseHandler = () => {
    setIsServiceAnimalClicked(false);
    document.body.style.overflow = 'auto';
  }

  const FiltersHandler = (event) => {
    event.stopPropagation();
    setIsFiltersClicked(true);
    document.body.style.overflow = 'hidden';
  }
  const FiltersCloseHandler = () => {
    setIsFiltersClicked(false);
    document.body.style.overflow = 'auto';
  }

  const FooterInfoHandler = (event) => {
    event.stopPropagation();
    setIsFooterInfoClicked(true);
    document.body.style.overflow = 'hidden';
  }
  const FooterInfoCloseHandler = () => {
    setIsFooterInfoClicked(false);
    document.body.style.overflow = 'auto';
  }

  const MobileSearchHandler = (event) => {
    event.stopPropagation();
    setIsMobileSearchClicked(true);
    document.body.classList.add('overflow-hidden');
  }
  const MobileSearchCloseHandler = () => {
    setIsMobileSearchClicked(false);
    document.body.classList.remove('overflow-hidden');
  }

  useEffect(() => {
    window.addEventListener('scroll', ScrollPositionHandler);
    return () => {
      window.removeEventListener('scroll', ScrollPositionHandler);
    };
  }, [])

  useEffect(() => {
    const CloseDivHandler = (event) => {
      if (animalRef.current && !animalRef.current?.contains(event.target) && isServiceAnimalClicked) {
        ServiceAnimalCloseHandler();
      }
    }
    document.addEventListener("click", CloseDivHandler);
    return () => {
      document.removeEventListener("click", CloseDivHandler)
    }
  }, [isServiceAnimalClicked])

  useEffect(() => {
    const CloseDivHandler = (event) => {
      if (filtersRef.current && !filtersRef.current?.contains(event.target) && isFiltersClicked) {
        FiltersCloseHandler();
      }
    }
    document.addEventListener("click", CloseDivHandler);
    return () => {
      document.removeEventListener("click", CloseDivHandler)
    }
  }, [isFiltersClicked])

  useEffect(() => {
    const CloseDivHandler = (event) => {
      if (footerInfoRef.current && !footerInfoRef.current?.contains(event.target) && isFooterInfoClicked) {
        FooterInfoCloseHandler();
      }
    }
    document.addEventListener("click", CloseDivHandler);
    return () => {
      document.removeEventListener("click", CloseDivHandler)
    }
  }, [isFooterInfoClicked])

  useEffect(() => {
    setInitialLoading(true);
    const timer = setTimeout(() => setInitialLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!initialLoading) {
      setDataLoading(true);
      const timer = setTimeout(() => setDataLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [searchedDestination, placeFilter]);

  return (
    <>
      <BrowserRouter>

        <Header scrollPosition={scrollPosition} searchFilterHandler={searchFilterHandler} ClickDateDivHandler={ClickDateDivHandler} ClickResortSearchHandler={ClickResortSearchHandler} searchFilter={searchFilter} setSearchFilter={setSearchFilter} total={total} adults={adults} setAdults={setAdults} children={children} setChildren={setChildren} pets={pets} setPets={setPets} infants={infants} setInfants={setInfants} ClickCheckOutDivHandler={ClickCheckOutDivHandler} DeleteGuestHandler={DeleteGuestHandler} guestInfo={guestInfo} setGuestInfo={setGuestInfo} ClickGuestDivHandler={ClickGuestDivHandler} DeleteDateHandler={DeleteDateHandler} date={date} setDate={setDate} ServiceAnimalHandler={ServiceAnimalHandler} setSearchedDestination={setSearchedDestination} setPlaceFilter={setPlaceFilter} checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} loading={initialLoading} placeFilter={placeFilter} MobileSearchHandler={MobileSearchHandler} ClickedDiv={ClickedDiv} ClickDestinationDivHandler={ClickDestinationDivHandler} DeleteDestinationHandler={DeleteDestinationHandler} textRef={textRef} searchDestination={searchDestination} DestinationSearchHandler={DestinationSearchHandler} setDestination={setDestination} destination={destination} setClickedDiv={setClickedDiv} setSearchDestination={setSearchDestination} ClickCheckInDivHandler={ClickCheckInDivHandler}></Header>
        {isFilterBarShow ? <FilterBar isTotalPriceClicked={isTotalPriceClicked} setIsTotalPriceClicked={setIsTotalPriceClicked} scrollPosition={scrollPosition} setPlaceFilter={setPlaceFilter} placeFilter={placeFilter} loading={initialLoading} FiltersHandler={FiltersHandler}></FilterBar> : ""}
        <Routes>
          <Route path='/' element={<Home scrollPosition={scrollPosition} isTotalPriceClicked={isTotalPriceClicked} placeFilter={placeFilter} searchedDestination={searchedDestination} checkInDate={checkInDate} checkOutDate={checkOutDate} loading={initialLoading || dataLoading} isShowMoreClicked={isShowMoreClicked} setIsShowMoreClicked={setIsShowMoreClicked} searchFilter={searchFilter}></Home>}></Route>
        </Routes>
        {isServiceAnimalClicked && (<>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40,
          }}></div><div ref={animalRef} ><ServiceAnimal ServiceAnimalCloseHandler={ServiceAnimalCloseHandler}></ServiceAnimal></div>  </>)}
        {isFiltersClicked && (<>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40,
          }}></div><div ref={filtersRef} ><Filters FiltersCloseHandler={FiltersCloseHandler}></Filters></div>  </>)}

        {isMobileSearchClicked && (<>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40,
          }}></div><div ><MobileSearch date={date} setDate={setDate} searchFilterHandler={searchFilterHandler} ClickDateDivHandler={ClickDateDivHandler} ClickCheckInDivHandler={ClickCheckInDivHandler} ServiceAnimalHandler={ServiceAnimalHandler} isMobileSearchClicked={isMobileSearchClicked} setGuestInfo={setGuestInfo} ClickResortSearchHandler={ClickResortSearchHandler} searchFilter={searchFilter} total={total} adults={adults} setAdults={setAdults} children={children} setChildren={setChildren} pets={pets} setPets={setPets} infants={infants} setInfants={setInfants} DeleteGuestHandler={DeleteGuestHandler} guestInfo={guestInfo} ClickGuestDivHandler={ClickGuestDivHandler} DeleteDateHandler={DeleteDateHandler} checkInDate={checkInDate} setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate} checkOutDate={checkOutDate} MobileSearchCloseHandler={MobileSearchCloseHandler} ClickCheckOutDivHandler={ClickCheckOutDivHandler} ClickMobileDestinationDivHandler={ClickMobileDestinationDivHandler} DeleteDestinationHandler={DeleteDestinationHandler} ClickedDiv={ClickedDiv} DestinationSearchHandler={DestinationSearchHandler} mobileTextRef={mobileTextRef} searchDestination={searchDestination} setClickedDiv={setClickedDiv} setDestination={setDestination} setSearchDestination={setSearchDestination} destination={destination}></MobileSearch></div>  </>)}

        <Footer isShowMoreClicked={isShowMoreClicked} footerInfoRef={footerInfoRef} FooterInfoHandler={FooterInfoHandler} isFooterInfoClicked={isFooterInfoClicked} FooterInfoCloseHandler={FooterInfoCloseHandler}></Footer>

      </BrowserRouter>
    </>
  )
}

export default App