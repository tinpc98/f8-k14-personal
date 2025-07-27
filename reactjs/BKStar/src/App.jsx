import AuthModal from "./components/AuthModal/index.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Routes, Route} from "react-router-dom";
import AddClassPage from "./components/AddClassPage/index.jsx";
import ClassroomPage from "./pages/ClassroomPage.jsx";
import ExamList from "./components/ExamList";
import MemberList from "./components/MemberList";
import ClassOverview from "./components/ClassOverview";
import ExamDetail from "./components/ExamDetail/index.jsx";
import AddQuestionForm from "./components/AddQuestionForm/index.jsx";
import UserProfile from "./components/UserProfile/index.jsx";




export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthModal />} />
            <Route path="/add-class" element={<AddClassPage />} />
            <Route path="/classroom/:classId" element={<ClassroomPage />}>
                <Route path="overview" element={<ClassOverview />} />
                <Route path="exams" element={<ExamList />} />
                <Route path="exams/:examId" element={<ExamDetail />} />
                <Route path="exams/:examId/add-question" element={<AddQuestionForm />} />
                <Route path="members" element={<MemberList />} />
            </Route>
            <Route path="/profile" element={<UserProfile />} />
        </Routes>
    );
}

