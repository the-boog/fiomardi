class Api::PhotosController < ApplicationController
  before_action :set_car
  before_action :set_photo, only: [:show, :update, :edit, :destroy]

    def index
      render json: @car.tasks
    end

    def show
      render json: @photo
    end

    def create
      photo = @car.photos.new(photo_params)
      if photo.save
        render json: photo
      else
        render json: { errors: photos.errors }, status: :unprocessable_entity 
      end
    end

    def update
      if @photo.update(photo_params)
        render json: @photo
      else
        render json: @photo.errors, status: 422
      end
    end
  
    def destroy
      @photo.destroy
    end
  
    private

    def set_car
      @car = Car.find(params[]:car_id])
    end

    def set_photo
      @photo = Photo.find(params[:id])
    end
  
    def photo_params
      params.require(:photo).permit(:sort_priority, :car_id, :url)
    end

  end
  