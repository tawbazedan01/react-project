import React, { useContext, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { UserContext } from '../../../../components/user/context/userContext/UserContext.jsx';
import InfoHeader from '../../../../components/header/InfoHeader.jsx';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../../../components/loading/Loading.jsx';
import style from './userInfo.module.css';

export default function UserInfo() {
  const { user, loading } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const updateImg = async (data) => {
    const token = localStorage.getItem('userToken');
    const formData = new FormData();

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    } else {
      toast.error("Please select an image!");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.put(`${import.meta.env.VITE_BURL}/user/update-image`, formData, {
        headers: {
          Authorization: `Tariq__${token}`,
          "Content-Type": "multipart/form-data",
        }
      });

      if (response.status === 200) {
        toast.success("Image updated successfully!");
      }
    } catch (error) {
      toast.error("Error updating image");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  if (isloading) return <Loading />;

  return (
    <>
      <div className='ps-5'>
        <InfoHeader />
        <Container>
          <Row className="min-vh-100 d-flex justify-content-center align-items-center">
            <Col md={6} className="p-4 shadow rounded mx-auto">
              <Form onSubmit={handleSubmit(updateImg)} encType='multipart/form-data' className="d-flex flex-column justify-content-center align-items-center gap-3">
                <div className="text-center">
                  <img src={imagePreview || user.image.secure_url || ""} alt="User Profile" className="rounded-circle" width="100" height="100" />
                </div>
                <Form.Group className="w-100">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type='text' defaultValue={user?.userName || ""} disabled />
                </Form.Group>
                <Form.Group className="w-100">
                  <Form.Label>User Email</Form.Label>
                  <Form.Control type='email' defaultValue={user?.email || ""} disabled />
                </Form.Group>
                <Form.Group id='updateImage' className="w-100">
                  <Form.Label>Update Your Profile Pic</Form.Label>
                  <Form.Control type="file" {...register('image')} onChange={handleImageChange} accept="image/*" />
                </Form.Group>
                <div className={`${style.update} pt-3 text-center`}>
                  <Button  type='submit'>Update</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
