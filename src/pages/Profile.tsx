import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Key, LogOut, Edit2 } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data - in a real app, this would come from your auth system
  const [userData, setUserData] = useState({
    name: "John Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    password: "********"
  });

  const handleLogout = () => {
    // Add your logout logic here
    toast({
      title: "Success",
      description: "Logged out successfully",
    });
    navigate("/login");
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Success",
      description: "Profile updated successfully",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 p-4">
      <Card className="w-full max-w-md bg-black/20 backdrop-blur-xl border border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Profile Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                value={userData.name}
                readOnly={!isEditing}
                className="pl-10 bg-white/5 border-white/10 text-white"
                placeholder="Full Name"
              />
            </div>

            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                value={userData.username}
                readOnly={!isEditing}
                className="pl-10 bg-white/5 border-white/10 text-white"
                placeholder="Username"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                value={userData.email}
                readOnly={!isEditing}
                className="pl-10 bg-white/5 border-white/10 text-white"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <Key className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="password"
                value={userData.password}
                readOnly={!isEditing}
                className="pl-10 bg-white/5 border-white/10 text-white"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            {isEditing ? (
              <Button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              >
                Save Changes
              </Button>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            )}
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="flex-1"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="w-full mt-4 border-gray-700 hover:bg-gray-800 text-white"
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;