'use server';

import { z } from 'zod';
import { appointment } from './difinition';
import { db } from './../../firebaseConfig'
import { getFirestore, collection, addDoc, getDocs, deleteDoc, serverTimestamp, query, orderBy, doc, updateDoc } from 'firebase/firestore';


const FormSchema = z.object({
  id: z.number(),
  title: z.coerce.string(),
  notes: z.coerce.string(),
  doctor: z.string(),
  date: z.string(),
}).strict();

const CreateAppointment = FormSchema;

export async function createAppointment(formData) {
  formData.createdAt = serverTimestamp();
  try {
    const docRef = await addDoc(collection(db, 'appointments'), formData)
    console.log(docRef)
    return true;
  } catch (error) {
    console.error('error creating appointment', error)
    return false;
  }
}


export const fetchAppointmentData = async () => {
  try {
    const appointmentCollection = await getDocs(collection(db, '/appointments'));
    const appointmentData = appointmentCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return appointmentData;
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return [];
  }
};
export const fetchAppointmentOptions = async () => {
  try {
    const appointmentCollection = await getDocs(collection(db, '/appointmentOptions'));
    const appointmentData = appointmentCollection.docs.map((doc) => doc.data())
    return appointmentData;
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return [];
  }
};