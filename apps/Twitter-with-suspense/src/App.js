import React, { Suspense, SuspenseList } from 'react';
import './App.css';
import { Loader } from './components/Loader';

const delay = (time) => (promiseResult) =>
  new Promise(resolve => setTimeout(() => resolve(promiseResult), time));

const Feed = React.lazy(() => import('./components/Feed').then(delay(5500)));
const WhoToFollow = React.lazy(() => import('./components/WhoToFollow').then(delay(1700)));
const TrendsForYou = React.lazy(() => import('./components/TrendsForYou').then(delay(800)));

const App = () => {
    return (
        <div className="App">
            <RenderLeftColumn />

            {/* <RenderTogether /> */}
            {/* <RenderFeedFirst /> */}
            <RenderRightColumnFirst />

        </div>
    );
}

function RenderLeftColumn() {
    return (
        <div className="Column Column--left">
            <span>Home</span>
            <span>Explore</span>
            <span>Notifications</span>
            <span>Messages</span>
            <span>Bookmarks</span>
            <span>Lists</span>
            <span>Profile</span>
            <span>More</span>
        </div>
    );
}

function RenderTogether() {
    return (
        <SuspenseList revealOrder="together">
            <div className="Column Column--middle">
                <Suspense fallback={<Loader />}>
                    <Feed />
                </Suspense>
            </div>
            <div className="Column Column--right">
                <Suspense fallback={<Loader className="TrendsForYou TrendsForYou--loading" />}>
                    <TrendsForYou />
                </Suspense>
                <Suspense fallback={<Loader className="WhoToFollow WhoToFollow--loading"  />}>
                    <WhoToFollow />
                </Suspense>
            </div>
        </SuspenseList>
    );
}

function RenderRightColumnFirst() {
    return (
        <SuspenseList revealOrder="backwards">
            <div className="Column Column--middle">
                <Suspense fallback={<Loader />}>
                    <Feed />
                </Suspense>
            </div>
            <div className="Column Column--right">
                <SuspenseList revealOrder="together">
                    <Suspense fallback={<Loader className="TrendsForYou TrendsForYou--loading" />}>
                        <TrendsForYou />
                    </Suspense>
                    <Suspense fallback={<Loader className="WhoToFollow WhoToFollow--loading"  />}>
                        <WhoToFollow />
                    </Suspense>
                </SuspenseList>
            </div>
        </SuspenseList>
    );
}

function RenderFeedFirst() {
    return (
        <SuspenseList revealOrder="forwards">
            <div className="Column Column--middle">
                <Suspense fallback={<Loader />}>
                    <Feed />
                </Suspense>
            </div>
            <div className="Column Column--right">
                <SuspenseList revealOrder="together">
                    <Suspense fallback={<Loader className="TrendsForYou TrendsForYou--loading" />}>
                        <TrendsForYou />
                    </Suspense>
                    <Suspense fallback={<Loader className="WhoToFollow WhoToFollow--loading"  />}>
                        <WhoToFollow />
                    </Suspense>
                </SuspenseList>
            </div>
        </SuspenseList>
    );
}

export default App;
