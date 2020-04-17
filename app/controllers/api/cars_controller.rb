class Api::CarsController < ApplicationController
  before_action :set_car, only: [:show, :update, :destroy]

    def index
      render json: Car.all
    end

    def show
      render json: @car
    end
  
    def create
      car = Car.new(car_params)
      if car.save
        render json: car
      else
        render json: car.errors, status: 422
      end
    end
  
    def update
      if @car.update(car_params)
        render json: @car
      else
        render json: @car.errors, status: 422
      end
    end
  
    def destroy
      Car.find(params[:id]).destroy
      render json: { message: 'Car deleted' }
    end
  
    private

    def set_car
      @car = Car.find(params[:id])
    end
  
    def car_params
      params.require(:car).permit(:make, :kind, :color, :price)
    end
  
  end