import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: null,
    active: {
      id: 'ABV123',
      title: 'string',
      body: '',
      date: 123142,
      imageUrls: [], // Urls a imagenes
    }
  },
  reducers: {
    addNewEmptyNote: (state,action) => {

    },
    setActiveNote: (state,action) => {

    },
    setNotes: (state,action) => {

    },
    setSaving: (state) => {

    },
    updateNote: (state,action) => {

    },
    deleteNoteById: (state,action) => {

    },
  }
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  updateNote,
  deleteNoteById
} = journalSlice.actions;