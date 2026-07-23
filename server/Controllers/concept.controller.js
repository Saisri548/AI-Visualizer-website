import Category from "../Models/Category.js";
import Concept from "../Models/Concepts.js";


// CREATE CONCEPT
export const createConcept = async (req, res) => {
  try {

    const category = await Category.findOne({
      slug: req.params.slug,
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const concept = await Concept.create({
      ...req.body,
      categoryId: category._id,
    });

    res.status(201).json({
      success: true,
      message: "Concept created successfully",
      data: concept,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// GET ALL CONCEPTS OF CATEGORY

export const getConceptsByCategory = async (req, res) => {

  try {

    const category = await Category.findOne({
      slug: req.params.slug,
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const concepts = await Concept.find({
      categoryId: category._id,
      isPublished: true,
    }).sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: concepts.length,
      data: concepts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// GET SINGLE CONCEPT

export const getConceptBySlug = async (req, res) => {

  try {

    const concept = await Concept.findOne({
      slug: req.params.slug,
    }).populate("categoryId","name slug");

    if (!concept) {
      return res.status(404).json({
        success:false,
        message:"Concept not found",
      });
    }

    res.status(200).json({
      success:true,
      data:concept,
    });

  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }

};


// UPDATE

export const updateConcept = async (req,res)=>{

  try{

    const concept = await Concept.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new:true,
        runValidators:true,
      }
    );

    if(!concept){

      return res.status(404).json({
        success:false,
        message:"Concept not found",
      });

    }

    res.status(200).json({
      success:true,
      message:"Concept updated successfully",
      data:concept,
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }

};


// DELETE

export const deleteConcept = async(req,res)=>{

  try{

    const concept = await Concept.findByIdAndDelete(req.params.id);

    if(!concept){

      return res.status(404).json({
        success:false,
        message:"Concept not found",
      });

    }

    res.status(200).json({
      success:true,
      message:"Concept deleted successfully",
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }

};